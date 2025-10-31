export const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section - 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img
        src="https://fastly.picsum.photos/id/609/200/300.jpg?hmac=jkFe_vvVM_tvHdIFYhYtG6uWYznjI6zHzJpfOWfHGiU"
        alt="Ocean filled by Stones"
      ></img>
      <div data-testid="custom-element">custom-element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" value="Ajay" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />I agree to the terms
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
