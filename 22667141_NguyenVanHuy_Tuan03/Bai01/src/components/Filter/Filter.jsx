import './Filter.css';
const Filter = () => {
    return (
        <>
        <div className='filter-container'>
            <h2 className='filter-title'>
                <span className='menu-icon'><img src="src/assets/img/list_filter.png" alt="" /> FILTERS</span>
            </h2>

          
                <div className='filter-header'>
                    <h3>Type</h3>
                    <b className='toggle-icon'>^</b>
                </div>
            <div className='filter-options'>

               <div className='option-left'>
               <div><img src="src/assets/img/checkbox.png" alt="" />Pan-fried</div>
                <div><img src="src/assets/img/checkboxpink.png" alt=""/>Grilled</div>
                <div><img src="src/assets/img/checkbox.png" alt="" />Sauteed</div>
                <div><img src="src/assets/img/checkbox.png" alt="" />Stedamed</div>
                </div> 

                <div className='option-right'>
               <div><img src="src/assets/img/checkbox.png" alt="" />Stir-fried</div>
                <div><img src="src/assets/img/checkboxpink.png" alt="" />Roasted</div>
                <div><img src="src/assets/img/checkbox.png" alt="" />Baked</div>
                <div><img src="src/assets/img/checkbox.png" alt="" />Stedwed</div>
                </div> 
            </div>
            <div className='filter-time'>
                <div className='time-header'>
                   
                    <h3>Time</h3> 
                    
                    <b className='toggle-icon'>^</b>
                </div>
                <div className='section-time'><p>30 minutes</p> <p>50minutes</p> </div>
                <div className='time-line'>
                    <img src="src/assets/img/slider.png" alt="" />
                </div>
                </div>  
            <div className='filter-rating'>
                <div className='rating-header'>
                    <h3>Rating</h3>
                    <b className='toggle-icon'>^</b>
                </div>
                <div className='rating'>
                    <div><img src="src/assets/img/checkbox.png" alt="" /><img src="src/assets/img/rating_5.png" alt="" /></div>
                    <div><img src="src/assets/img/checkbox.png" alt="" /><img src="src/assets/img/rating_4.png" alt="" /></div>
                    <div><img src="src/assets/img/checkboxpink.png" alt="" /><img src="src/assets/img/rating_3.png" alt="" /></div>
                    <div><img src="src/assets/img/checkboxpink.png" alt="" /><img src="src/assets/img/rating_2.png" alt="" /></div>
                    <div><img src="src/assets/img/checkboxpink.png" alt="" /><img src="src/assets/img/rating_1.png" alt="" /></div>
                </div>

            </div>
        <div className='button'>
            <button className='apply-button'>Apply</button>
            </div>
        </div>
        
        </>
    )
    }
export default Filter