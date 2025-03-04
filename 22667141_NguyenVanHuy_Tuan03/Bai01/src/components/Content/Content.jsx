import './Content.css';
const Content = () => {
    return (
        <div className='content-container'>
        <h1>Sorry, no results were found for "cakescascsa"</h1>
       <div> <img src="src/assets/img/nothing.png" alt="" /></div>
        <p>We have all your independence Day sweets covered</p>
        <div className='button-section'>
            <button className='btn-1'>Sweet Cake</button> 
            <button className='btn-2'>Black Cake</button> 
            <button className='btn-3'>Pozole verde</button> 
            <button className='btn-4'>Healthy food</button> 
        </div>
        </div>
    );
    }
export default Content;