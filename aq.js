import './shared.component.css';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const SharedComponent = (props) => {

//create function for edit

function editItem(item){
    props.editItemFromCreate(item)
}
function deleteItem(item){
props.deleteItemFromCreate(item)
}
    return (
        <div>
            <h3></h3>
            <table className="table table-bordered table-hover">
                <thead className="table-danger">
                    <tr>
                        {
                            props.headers.map((header) => <th>{header}</th>)

                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((row) => <tr>
                            {
                                Object.values(row).map((cell) => <td>{cell}</td>)
                            }
                            
                            <td>
                                {/* <button className='btn btn-success'>Edit</button> &nbsp;
                                <button className='btn btn-danger'>Delete</button> */}


                                <a href='wonder-war' onClick={(item) => {editItem(item)}}><MdModeEdit className='bomma'/> </a>
                              <a href='#' onClick={(item) => {deleteItem(item)}}><MdDelete className='bomma1'/> </a>
                              <a href='#' onClick={() => {}}><MdOutlinePictureAsPdf className='bomma2'/></a>
                               
                            </td>

                        </tr>
                        )
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
   
}

export default SharedComponent;





































