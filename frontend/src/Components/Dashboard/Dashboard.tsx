import React from "react";

import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";

import  './Dashboard.css';
import {useGoldPrice} from "../Contexts/GoldPriceContext";


const Dashboard: React.FC = () => {
    const { goldPriceInfo } = useGoldPrice();
    return (
        <div className="dashboard-background">
        <Container>
            <Typography className='text-center mb-4 p-3' variant="h4" component="h1" gutterBottom>
                Gold Price Dashboard
            </Typography>
            {goldPriceInfo && (
                <TableContainer component={Paper}>
                    <Table aria-label="gold price table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Category</TableCell>
                                <TableCell align="right">Value (EUR)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* Table rows */}
                            <TableRow>
                                <TableCell component="th" scope="row">Price per Unze (31g, 24k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (24k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_24k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (22k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_22k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (21k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_21k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (20k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_20k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (18k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_18k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (16k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_16k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (14k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_14k.toFixed(2)} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">Price per gram (10k)</TableCell>
                                <TableCell align="right">{goldPriceInfo.price_gram_10k.toFixed(2)} €</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
        </div>
    );
};

export default Dashboard;
