import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="registration-form" style={{ width: '60vw' }}>
        <h1 className="form-heading">Employee Registration Form</h1>
        <div className="form-row-double">
          <div className="form-group">
            <label className="label">First Name*</label>
            <input type="text" className="input" style={{ width: '20vw' }} />
          </div>
          <div className="form-group">
            <label className="label">Last Name*</label>
            <input type="text" className="input" style={{ width: '20vw' }} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Date of Birth</label>
            <input type="date" className="input" style={{ width: '60vw' }} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label for="study" className='label'>Study*</label>

            <select name="study" className="input" id="study" style={{ width: '60vw' }}>
              <option>BE</option>
              <option>BCOM</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>
          </div>
        </div>
        

        <div className="form-row-double">
          <div className="date-group">
            <label className="label">Start Date</label>
            <input type="date" className="input" style={{ width: '20vw' }} />
          </div>
          <div className="date-group">
            <label className="label">End Date</label>
            <input type="date" className="input" style={{ width: '20vw' }} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Current Salary</label>
            <input type="text" className="input" style={{ width: '60vw' }} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="label">Additional Information</label>
            <textarea className="input" rows="100"  style={{ width: '60vw' }}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
