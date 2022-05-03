import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { DialogActions, DialogContent, TextField } from '@mui/material';

function EditCar({editCar, params}) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    });

    const handleOpen = () => {
        console.log(params.value);
        setOpen(true);
        setCar({
            brand: params.data.brand,
            model: params.data.model,
            color: params.data.color,
            fuel: params.data.fuel,
            year: params.data.year,
            price: params.data.price,
        })
    }

    const handleSave = () => {
        console.log("tallennus");
        editCar(car, params.value);
        setOpen(false)
    }

    const handleClose = () => {
        console.log("close")
        setOpen(false)
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name] : event.target.value})
    }

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <TextField
                        name="brand"
                        value={car.brand}
                        margin="dense"
                        label="Brand"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="model"
                        value={car.model}
                        margin="dense"
                        label="Model"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="color"
                        value={car.color}
                        margin="dense"
                        label="Color"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="fuel"
                        value={car.fuel}
                        margin="dense"
                        label="Fuel"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="year"
                        value={car.year}
                        margin="dense"
                        label="Year"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="price"
                        value={car.price}
                        margin="dense"
                        label="Price"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar