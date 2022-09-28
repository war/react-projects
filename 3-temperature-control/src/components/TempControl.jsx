export const TempControl = ({ temp, setTemp }) => {
    return (
        <div className="temp-control">
            <span>Temperature: {temp}</span>
            <p>
                <button onClick={() => setTemp(temp - 10)}>-</button>
                <button onClick={() => setTemp(temp + 10)}>+</button>
            </p>
        </div>
    );
}