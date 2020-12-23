import React,{Component} from 'react'; 
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

 
export default class EmployeesListDatatable extends Component{

    constructor(props)
    {
        super(props);
        this.state={arrayofObject:[],page:0,rowsPerPage:5,tableColumn:[]};
       
       
    }


    componentDidMount()  
    {
        this.loadColumnsOfTable();
        this.loadStaticData();
    }
    loadColumnsOfTable()
    {
        let tableColumns=[ { id: 'id', label: 'Sno', minWidth: 50 },
        { id: 'name', label: 'Name', minWidth: 200 },
        { id: 'address', label: 'Address', minWidth: 200 },
        { id: 'mobileNo', label: 'Mobile No', minWidth: 100 },
        { id: 'depid', label: 'Department', minWidth: 50 },
        { id: 'role', label: 'Role', minWidth: 100 },
        { id: 'dateat', label: 'Date of join', minWidth: 100 }];
        this.setState({tableColumn:tableColumns})
    }
    loadStaticData(){
          this.setState({ arrayofObject:[{"id":"1","name":"Shree","address":"","mobileNo":"","depid":"","role":"","dateat":""},{"id":"2","name":"Sai","address":"","mobileNo":"","depid":"","role":"","dateat":""}] })  //static way to load data
    }


    loadDynamicData(){
        //http://localhost:62489/api/default/GetEmplpoyeesList
        fetch('http://localhost/ReactWebAPI/api/default/GetEmplpoyeesList')  
        .then(response=>response.json())
        .then(output=>{
            this.setState({arrayofObject:output})
        })
    }

    componentDidUpdate()  // based on change event this will automatically load data
    {
        this.loadDynamicData();   
    } 

    setPage(newpage)
    {
        this.setState({page:newpage});
    }
    setRowsPerPage(counts)
    {
        this.setState({rowsPerPage:counts});
    }

    render()
    {
 
        const {arrayofObject} =this.state; //table binding properties 
 
        //Material Datatable events handler starts
        const page = this.state.page;
        const rowsPerPage =  this.state.rowsPerPage;
        const tableColumn = this.state.tableColumn;
         
        const handleChangePage = (event, newPage) => {
            this.setPage(newPage);
          };
        
          const handleChangeRowsPerPage = (event) => {
            this.setRowsPerPage(+event.target.value);
            this.setPage(0);
          };
        return(
            <div >
                     {/* align={column.align} */}
                <br/>
                <Paper className="container">
                    <TableContainer >
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {tableColumn.map((column) => (
                                <TableCell
                                key={column.id}
                                style={{ minWidth: column.minWidth }}
                                >  
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {arrayofObject.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {tableColumn.map((column) => {
                                    const value = row[column.id];
                                    return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                    );
                                })}
                                </TableRow>
                            );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={arrayofObject.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    </Paper>
                
             
            </div>
        );
    }
}

