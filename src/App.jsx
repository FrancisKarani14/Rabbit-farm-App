function App() {
  const url = "https://json-server-7-kr3u.onrender.com/rabbits";

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    gender: '',
    served: false,
    dateServed: '',
    probableBirthDate: ''
  });

  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setRabbits(data))
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newRabbit => {
        setRabbits(prev => [...prev, newRabbit]);
        setFormData({
          name: '',
          image: '',
          gender: '',
          served: false,
          dateServed: '',
          probableBirthDate: ''
        });
      })
      .catch((err) => console.error("Post Error:", err));
  }

  function handleDelete(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setRabbits(prev => prev.filter(rabbit => rabbit.id !== id));
      })
      .catch(err => console.error("Delete Error:", err));
  }

  const handleUpdate = (updatedRabbit) => {
    fetch(`${url}/${updatedRabbit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRabbit),
    })
      .then(res => res.json())
      .then(newRabbit => {
        const updatedList = rabbits.map(rabbit =>
          rabbit.id === newRabbit.id ? newRabbit : rabbit
        );
        setRabbits(updatedList);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animallist" element={
          <AnimalList rabbits={rabbits} handleDelete={handleDelete} onUpdate={handleUpdate} />
        } />
        <Route path="/rabbitform" element={
          <RabbitForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
