import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, TextField } from '@mui/material';

function AddCar( {addCar} ) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: '',
    })

    const handleClose = () => {
        console.log("suljettiin ikkuna");
        addCar(car);
        setOpen(false);
    }

    const handleOpen = () => {
        console.log("Add nappia painettu");
        setOpen(true);
    }

    const inputChanged = (event) => {
        setCar({...car, [event.target.name]: event.target.value});
        console.log("Muutos tapahtunut" + car)
    }

    const handleCancel = () => {
        console.log("Cancel nappia painettu");
        setOpen(false);
    }

    return(
        <div>
            <Button onClick={handleOpen} variant="outlined">Add Car</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>New Car</DialogTitle>
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
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar