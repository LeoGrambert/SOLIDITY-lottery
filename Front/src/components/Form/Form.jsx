const Form = ({ value, setValue }) => {
    return (
        <form>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input 
              type={'number'}
              value={value} 
              onChanger={event => setValue(event.target.value)} 
              />
          </div>
          <button>
            Enter
          </button>
        </form>
    );
}

export default Form;