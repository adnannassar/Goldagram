import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useGoldPrice } from "../Contexts/GoldPriceContext";

export interface GoldItem {
    id: number;
    weight: number;
    karat: number;
    totalPrice: number;
    buyDate: string;
    company: string;
}

interface PersonalProps {
    goldItems: GoldItem[];
}

const Personal: React.FC<PersonalProps> = () => {
    const { goldPriceInfo } = useGoldPrice();
    const [goldItems, setGoldItems] = useState<GoldItem[]>([]);

    const calculateCurrentPrice = (weight: number, karat: number): number => {
        if (!goldPriceInfo) return 0;

        let pricePerGram;
        switch (karat) {
            case 24:
                pricePerGram = goldPriceInfo.price_gram_24k;
                break;
            case 22:
                pricePerGram = goldPriceInfo.price_gram_22k;
                break;
            case 21:
                pricePerGram = goldPriceInfo.price_gram_21k;
                break;
            case 20:
                pricePerGram = goldPriceInfo.price_gram_20k;
                break;
            case 18:
                pricePerGram = goldPriceInfo.price_gram_18k;
                break;
            case 16:
                pricePerGram = goldPriceInfo.price_gram_16k;
                break;
            case 14:
                pricePerGram = goldPriceInfo.price_gram_14k;
                break;
            case 10:
                pricePerGram = goldPriceInfo.price_gram_10k;
                break;
            default:
                pricePerGram = 0;
        }

        return pricePerGram * weight;
    };

    useEffect(() => {
        const fetchGoldItems = async () => {
            try {
                const response = await fetch('http://localhost:8080/gold/all');
                if (response.ok) {
                    const data = await response.json();
                    setGoldItems(data);
                } else {
                    console.error('Failed to fetch gold items');
                }
            } catch (error) {
                console.error('Error fetching gold items:', error);
            }
        };

        fetchGoldItems();
    }, []);

    // Calculate sums
    let totalBuyPrice = 0;
    let totalCurrentPrice = 0;
    let totalDifference = 0;
    goldItems.forEach(item => {
        const currentPrice = calculateCurrentPrice(item.weight, item.karat);
        totalBuyPrice += item.totalPrice;
        totalCurrentPrice += currentPrice;
        totalDifference += currentPrice - item.totalPrice;
    });

    return (
        <TableContainer component={Paper}>
            <Table aria-label="personal gold table">
                <TableHead>
                    <TableRow>
                        <TableCell>Weight (g)</TableCell>
                        <TableCell>Karat</TableCell>
                        <TableCell>Total Price (Buy Date)</TableCell>
                        <TableCell>Current Price</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Difference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {goldItems.map((item) => {
                        const currentPrice = calculateCurrentPrice(item.weight, item.karat);
                        const originalPrice = Number(item.totalPrice);
                        const difference = currentPrice - originalPrice;
                        const differenceFormatted = difference.toFixed(2);
                        return (
                            <TableRow key={item.weight} style={{ color: difference >= 0 ? 'gold' : 'red' }}>
                                <TableCell>{item.weight}</TableCell>
                                <TableCell>{item.karat}</TableCell>
                                <TableCell>{originalPrice.toFixed(2)} €</TableCell>
                                <TableCell>{currentPrice.toFixed(2)} €</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{differenceFormatted} €</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* Total Price and Difference Table */}
            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Total price buy:</TableCell>
                            <TableCell>{totalBuyPrice.toFixed(2)}€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total price sell:</TableCell>
                            <TableCell>{totalCurrentPrice.toFixed(2)}€</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total difference:</TableCell>
                            <TableCell>{totalDifference.toFixed(2)}€</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContainer>
    );
};

export default Personal;
