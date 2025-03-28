import "../components/css/HomepageAR.css";
import { useEffect,useState } from "react";
import EditModal from "./EditModal.jsx";
import axios from "axios";

function HomePageAR() {

  const [inputs,setInputs]=useState({
    first_name:"",
    last_name:"",
    id_number:"",
    phone_number:"",
    email:"",
    occupation:"",
    department:"",
    user_picture:"noimage",
    plate_number:"",
    motor_color:"",
    motor_brand:"",
    motor_series:""
  })

  const [err,setError] = useState(null);
  const [selectedRow,setSelectedRow] = useState(null);
  const [data,setData] = useState([]);
  const handleChange = e =>{
    const { name, value, files } = e.target;
  if (name === "user_picture" && files) {
    setInputs((prev) => ({ ...prev, [name]: files[0] }));
  } else {
    setInputs((prev) => ({ ...prev, [name]: value }));
  }
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{

      if(inputs.user_picture !== "noimage" && inputs.user_picture instanceof File){
        const formData = new FormData();
        formData.append("profileImage", inputs.user_picture);
        const uploadRes = await axios.post("http://localhost:8800/new/upload-image", formData,{headers: { "Content-Type": "multipart/form-data" }});
        const imageUrl = uploadRes.data.imageUrl;
        inputs.user_picture = imageUrl;
      }

      const res = await axios.post(`http://localhost:8800/new/add`,inputs);
      fetchData();
      console.log(res);
    }catch(err){
      console.log(err);
      setError(err.response.data);
    }
  }

  const fetchData = async() =>{
    try{
      const response = await axios.get(`http://localhost:8800/request/seedata`);
      setData(response.data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  

  const handleRowClick = (id) => {
    console.log("Selected User:", id);
    setSelectedRow(id);
  };

  const [showModal, setShowModal] = useState(false);

  const handleEditClick = (id) => {
    const user = data.find((item) => item.id === id);
    setInputs(user);  
    setShowModal(true); 
  };

  const handleEditSubmit = async(id,updatedData)=>{
    try{
      const response = await axios.put(`http://localhost:8800/request/user/${id}`,updatedData);
      console.log(response.data.message);
      alert('Driver info updated Successfully!');
      await fetchData();
      setShowModal(false);  
    }catch(err){
      console.error('Error updating info', err);
      alert("Error updating Driver info.");
    }
  }

  const handleDelete =async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this account?");
    if (!confirmDelete)return;

    try{
      const response = await axios.delete(`http://localhost:8800/request/delete/${id}`);
      alert(response.data.message);
      setSelectedRow(null);
      await fetchData();
    } catch(err){
      console.error("Error Deleting account: ", err);
      alert("An error occured while deleting the account.");
    }
  }
  

  return (
    <div className="homepageAR-container">
      <div className="homepageAR-containerTop">
        <div className="stick"> 
          <h2>DRIVER INFORMATION</h2>
          <section>
            <button onClick={() => selectedRow && handleEditClick(selectedRow)} 
        disabled={!selectedRow} >Edit</button>
            <button onClick={() => selectedRow && handleDelete(selectedRow)} disabled={!selectedRow}>
  Delete
</button>
          </section>
        </div> 
        <table>
          <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID Number</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Occupation</th>
            <th>Department</th>
            <th>Plate Number</th>
            <th>Motor Color</th>
            <th>Motor Brand</th>
            <th>Motor Series</th>
          </thead>
          <tbody id="tableBody">
          {data.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item.id)}  className={`clickable-row ${selectedRow === item.id ? 'selected-row' : ''}`}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.id_number}</td>
              <td>{item.phone_number}</td>
              <td>{item.email}</td>
              <td>{item.occupation}</td>
              <td>{item.department}</td>
              <td>{item.plate_number}</td>
              <td>{item.motor_color}</td>
              <td>{item.motor_brand}</td>
              <td>{item.motor_series}</td>
            </tr>
          ))}
          </tbody>
        </table>
        
      </div>

      <form className="homepageAR-containerBot" aria-required>
        <h2>Edit Account</h2>
        <div>
          <label for="first_name">First Name:</label> 
          <input type="text" placeholder="First Name" name="first_name" onChange={handleChange}/>
        </div>
        
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text"  placeholder="Last Name" name="last_name" onChange={handleChange}/>
        </div>
        
        <div> 
          <label for="phone_number">Phone Number (+63):</label>
          <input type="text" placeholder="Phone Number" name="phone_number" onChange={handleChange}/>
        </div>
        
        <div>
          <label for="id_number">ID Number:</label>
          <input type="text" placeholder="ID Number" name="id_number" onChange={handleChange}/>  
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input type="text" placeholder="Email" name="email" onChange={handleChange}/>
        </div>
        
        <div>
          <label for="occupation">Occupation:</label>
          <input type="text" placeholder="Occupation" name="occupation" onChange={handleChange}/>
        </div>
        
        <input type="text" placeholder="Department" name="department" onChange={handleChange}/>
        <input type="file" accept="image/*" name="user_picture" onChange={handleChange}/>
  
        <input type="text" placeholder="Plate Number" name="plate_number" onChange={handleChange}/>
        <input type="text" placeholder="Motor Color" name="motor_color" onChange={handleChange}/>
        <input type="text" placeholder="Motor Brand" name="motor_brand" onChange={handleChange}/>
        <input type="text" placeholder="Motor Series" name="motor_series" onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        {err && <p>{err}</p>}
      </form>
      {showModal && (
          <EditModal
            inputs={inputs}
            handleChange={handleChange}
            handleEdit={() => handleEditSubmit(selectedRow, inputs)}
            handleCloseModal={() => setShowModal(false)}
          />
      )}
    </div>
  );
}

export default HomePageAR;

