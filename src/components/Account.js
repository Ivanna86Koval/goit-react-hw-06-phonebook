import { useDispatch, userSelector} from 'react-redux';
import {deposit, withdraw} from 'redux/accountSlice'

export const Account = () => {
    const dispatch = useDispatch()
    const balance = userSelector(state => state.account.balance)
    return (
        <div>
            <div>Balance: {balance}$</div>
        <button onClick={()=> dispatch(deposit(10))}>Deposit</button>
        <button onClick={()=> dispatch(withdraw(5))}>Withdraw</button>
        </div>
    )
}