import React, {createContext, useState, useEffect, ReactNode, useContext} from 'react';
import {GoldPriceInfo} from '../Models/GoldPriceInfo';
import {mockGoldPriceInfo} from '../MockData/MockGoldData';

interface GoldPriceContextType {
    goldPriceInfo: GoldPriceInfo | null;
    setGoldPriceInfo: React.Dispatch<React.SetStateAction<GoldPriceInfo | null>>;
}

interface GoldPriceProviderProps {
    children: ReactNode;
}

const GoldPriceContext = createContext<GoldPriceContextType | null>(null);

export const GoldPriceProvider: React.FC<GoldPriceProviderProps> = ({children}) => {
    const [goldPriceInfo, setGoldPriceInfo] = useState<GoldPriceInfo | null>(null);
    const useMockData = process.env.REACT_APP_USE_MOCK_DATA === 'false';
    const apiKey: string | undefined = process.env.REACT_APP_GOLD_API_KEY;

    useEffect(() => {
        const fetchGoldPrice = async () => {
            if (useMockData) {
                setGoldPriceInfo(mockGoldPriceInfo);
                return;
            }
            if (!apiKey) {
                console.error('API key is undefined');
                return;
            }
            try {
                const response = await fetch('https://www.goldapi.io/api/XAU/EUR', {
                    headers: {'x-access-token': apiKey}
                });

                if (!response.ok) {
                    console.log('Network response was not ok');
                }

                const data = await response.json();
                setGoldPriceInfo(data);
            } catch (error) {
                console.error('Error fetching gold data:', error);
            }
        };

        fetchGoldPrice().then(r =>
            console.log("Data fetched successful", r)
        );
    }, [apiKey, useMockData]);

    return (
        <GoldPriceContext.Provider value={{goldPriceInfo, setGoldPriceInfo}}>
            {children}
        </GoldPriceContext.Provider>
    );
};

export const useGoldPrice = () => {
    const context = useContext(GoldPriceContext);
    if (!context) {
        throw new Error('useGoldPrice must be used within a GoldPriceProvider');
    }
    return context;
};
