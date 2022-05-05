import react, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./state/actionCreators/index";

const Shop = () => {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators, dispatch)

    const handleUsername = (e) => {
        setTimeout(()=>{
            let username = e.target.value;
            console.log(username)
            action.setUsername(username)
        },100)
    }

    return(
        <Fragment>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="https://stylesatlife.com/wp-content/uploads/2017/05/Adidas-ZX-flux-Gym-Shoes-1.jpg.webp" style={{width:"300px",borderRadius:"4px"}}/>
            <h2>Adidas Shoes</h2>
            <div>
            <button className="btn btn-primary" onClick={()=>{action.withdrawMoney(1)}} >-</button>
                Add to Cart
            <button className="btn btn-primary" onClick={()=>{action.depositMoney(1)}} >+</button>
            </div>
            </div>
            <hr />
            <div className="Form-cover">
            Enter your Name 
            <input type="text" className="form-control" name="username" onChange={handleUsername} />
            </div>
        </Fragment>
    )
}
export default Shop;