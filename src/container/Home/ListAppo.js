import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, IconButton, TextField } from '@mui/material';
import { Button } from 'reactstrap';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';

function ListAppo(props) {
    const [data, setData] = useState([]);
    const [Dopen, setDOpen] = useState(false);
    const [Did, setDid] = useState('');
    const [filterdata, setFilter] = useState([]);
    const history = useHistory()

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("appointment"));

        if (localData !== null) {
            setData(localData);
        }
    }

    const handleClose = () => {
        setDOpen(false);
      };

    const handleClickDOpen = (id) => {
        console.log(id);

        setDOpen(true);
        setDid(id);
        
    }

    const handleDelete = () => {
        console.log(Did);
       let localData = JSON.parse(localStorage.getItem("appointment"));

       let DFilter = localData.filter((d,i) => d.id !== Did);

       localStorage.setItem("appointment", JSON.stringify(DFilter))
       loadData();
       setDOpen(false);
    }

    const handleClickEOpen = (id) => {
        history.push("/apponmemt", {"id" : id});
    }

    useEffect(
        () => {
            loadData();
        },[]
    )

    const columns = [
        { field: 'id', headerName: 'Id', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton onClick={() => handleClickDOpen(params.id)}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => handleClickEOpen(params.id)}>
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        },
    ]

    const handlesearch = (serval) => {
        let searchData = JSON.parse(localStorage.getItem("appointment"));

        let fData = searchData.filter((f) => (
        f.id.toString().includes(serval) ||
        f.name.toString().toLowerCase().includes(serval.toLowerCase()) ||
        f.email.toString().includes(serval) ||
        f.phone.toString().includes(serval) ||
        f.department.toString().includes(serval) ||
        f.data.toString().includes(serval) ||
        f.message.toString().includes(serval)
        ));

        setFilter(fData);
        // console.log(fData);

            // console.log(searchData);
            console.log(serval);
    }

    const SearchResult = filterdata.length > 0 ? filterdata : data;
    

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2 className='text-center'> List Appointment</h2>
                    </div>
                    <div>
                        <TextField
                        margin="dense"
                        id="search"
                        label="search"
                        type="search"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handlesearch(e.target.value)}
                        />
                    </div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={SearchResult}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </div>
            </section>
            <Dialog
                open={Dopen}
                keepMounted
                onClose={handleClose}
            >
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleDelete}>Agree</Button>
                </DialogActions>
            </Dialog>
        </main>        

    );
}

export default ListAppo;