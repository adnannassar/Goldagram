// App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {GoldPriceProvider} from "../Contexts/GoldPriceContext";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Form from "../UI/Form";
import Personal, {GoldItem} from "../Personal/Personal";


function App() {
    const [goldItems, setGoldItems] = useState<GoldItem[]>([]);

    const addGoldItem = (newItem: GoldItem) => {
        setGoldItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <GoldPriceProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add-gold" element={<Form onAddItem={addGoldItem} />} />
                    <Route path="/my-gold" element={<Personal goldItems={goldItems} />} />
                </Routes>
            </BrowserRouter>
        </GoldPriceProvider>
    );
}

export default App;
