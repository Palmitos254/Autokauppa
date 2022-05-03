import React, { useEffect } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';

function Carlist() {
    const [cars, setCars] = React.useState([]);

    const deleteCar = (link) => {
        console.log("Ollaan delete car funktiossa");
        console.log(link);

        fetch(link, { method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchCars();
                }
            })
    }

    const addCar = (car) => {
        console.log("carlistin addcar funktio");
        fetch("https://carrestapi.herokuapp.com/cars", {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(car)
            })
            .then(response => {
                if(response.ok) {
                    fetchCars();
                } else {
                    alert("Something went wrong!");
                }
            })
            .catch(err => console.error(err))
    }

    const fetchCars = () => {
        fetch("https://carrestapi.herokuapp.com/cars")
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
    }

    const editCar = (editCar, link) => {
        console.log("Ollaan edit car funktiossa");
        console.log(link)
        console.log(editCar.brand)
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(editCar)
        })
        .then(response => {
            if(response.ok) {
                console.log("onnistui");
                fetchCars();
            } else {
                alert('Something went wrong');
            }
        })
        .catch(err => console.error(err))
    }

    const columns = [
       { field: "brand" , sortable: true , filter: true },
       { field: "model" , sortable: true , filter: true },
       { field: "color" , sortable: true , filter: true },
       { field: "fuel" , sortable: true , filter: true },
       { field: "year" , sortable: true , filter: true },
       { field: "price" , sortable: true , filter: true},
       {
           headerName: 'Edit' ,
           width: 100 ,
           field: '_links.self.href' ,
           cellRenderer: params =>
            <EditCar editCar={editCar} params={params} />
       }, {
           headerName: 'Delete' ,
           width: 100 ,
           field: '_links.self.href' ,
           cellRenderer: params => 
            <IconButton onClick={() => deleteCar(params.value)}>
                <DeleteIcon />
            </IconButton>
       },
    ]

    useEffect( () => {
        fetch("https://carrestapi.herokuapp.com/cars")
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
    }, [])

    return (
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
            <AddCar addCar={addCar} />
            <AgGridReact
                rowData={cars}
                paginationPageSize={11}
                pagination={true}
                columnDefs={columns}>
            </AgGridReact>
        </div>
    );
}

export default Carlist