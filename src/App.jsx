import './App.css'

function App() {
  const hendlehead = e => {
    e.preventDefault()
    const base = e.target
    const name = base.name.value
    const email = base.email.value
    const user = { name, email }
    console.log(user);

    fetch(`http://localhost:1000/headphone`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert("successfully dome post")
          base.reset()
        }
      })

  }

  return (
    <>
      <h1>hi headphone</h1>

      <form onSubmit={hendlehead}>
        <input type="text" name='name' /><br />
        <input type="email" name='email' /><br />
        <input type="submit" value='submit' />
      </form>


    </>
  )
}

export default App
