function ShareToys() {

  return(
    <>
    <p>Share New Toys</p>
    <input
    type="text"
    placeholder="description"
    />
    <select name="Age Group">
      <option value="1">0-3 Years Old</option>
      <option value="2">3-5 Years Old</option>
      <option value="3">5-10 Years Old</option>
    </select>
    <button>Share Toy</button>
    <button>Cancel</button>

    </>
  )

}

export default ShareToys;