import { DataGrid } from '@mui/x-data-grid';
import {data} from './DummyData.js'




function Account() {
  return (
    <div className="">
      <body>
            <div>
              <div style={{ height: 500, width: '100%', marginTop:20, padding:20, }}>
                <DataGrid
                  rows={data}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[5, 10, 15, 30]}
                  checkboxSelection
                />
              </div>
            </div>
      </body>
    </div>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'address', headerName: 'Address', width: 400 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 200,},
  { field: 'category', headerName: 'Category', width: 250 },
  { field: 'email', headerName: 'Email', width: 300,},
];

const rows = [
  { id: 1, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 2, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 3, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 4, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 5, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 6, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 7, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 8, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 9, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 10, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 11, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 12, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  { id: 13, name: 'Ayam Nelongso', address: 'Snow', phoneNumber: '0813123132', category: 'Restaurant', email: 'ayamnelongso@gmail.com' },
  
];

export default Account;
