import React from 'react';
import { useForm } from 'react-hook-form';
import {Container, TextField, Button, Select, MenuItem, InputLabel, FormControl, colors} from '@mui/material';
import {GoldItem} from "../Personal/Personal";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



interface FormProps {
    onAddItem: (newItem: GoldItem) => void;
}
const Form: React.FC<FormProps> = ({ onAddItem }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
        try {
            const response = await axios.post('http://localhost:8080/gold/add', data);
            onAddItem(data);
            console.log(response.data);
            navigate('/my-gold');

        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Gold Weight in Gram"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('weight', { required: true })}
                    error={!!errors.weight}
                    helperText={errors.weight ? "Weight is required" : ""}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Karat</InputLabel>
                    <Select
                        label="Karat"
                        defaultValue=""
                        {...register('karat', { required: true })}
                    >
                        <MenuItem value={24}>24K</MenuItem>
                        <MenuItem value={22}>22K</MenuItem>
                        <MenuItem value={18}>18K</MenuItem>
                        <MenuItem value={14}>14K</MenuItem>
                        <MenuItem value={10}>10K</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Total Price (EUR)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('totalPrice', { required: true })}
                    error={!!errors.totalPrice}
                    helperText={errors.totalPrice ? "Total price is required" : ""}
                />
                <TextField
                    label="Buy Date"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="date"
                    {...register('buyDate', { required: true })}
                    error={!!errors.buyDate}
                    helperText={errors.buyDate ? "Buy date is required" : ""}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Company"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('company', { required: true })}
                    error={!!errors.company}
                    helperText={errors.company ? "Company is required" : ""}
                />
                <input
                    type="file"
                    {...register('photo')}
                />
                <Button type="submit"  style = {{backgroundColor: 'black', color:'#f1d25c'}} variant="contained" className={'mt-4'} color="primary" fullWidth>
                    Add Gold
                </Button>
            </form>
        </Container>
    );
};

export default Form;
