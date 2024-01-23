import { useCallback, useState } from "preact/hooks";

// hook to separate the logic of the form
function useProfileForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [firstname, setFirstName] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit= useCallback((event) => {
        event.preventDefault();
        alert("data change");
      }, []); 

    const handleChangeEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [email]);

    const handleChangeName = useCallback((event) => {
        setName(event.target.value);
    }, [name]);

    const handleChangeFirstname = useCallback((event) => {
      setFirstName(event.target.value);
  }, [firstname]);

  const handleChangeAge = useCallback((event) => {
    setAge(event.target.value);
}, [age]);

    return { email, name, firstname, age, handleChangeEmail, handleChangeName, handleChangeFirstname , handleChangeAge};

}

// principal component
export function InfoProfileForm() {

    const { email, name, firstname, age, handleChangeEmail, handleChangeName, handleChangeFirstname , handleChangeAge} = useProfileForm();

    return (
      <div class="infoProfile-body">
          <form class="infoProfile">
        <label class="infoProfile-field">
          Name:
          <input type="text" value={name} onChange={handleChangeName} required />
        </label>
        <label class="infoProfile-field">
          Firstname:
          <input type="text" value={firstname} onChange={handleChangeFirstname} required />
        </label>
        <label class="infoProfile-field">
          Age:
          <input type="number" value={age} onChange={handleChangeAge} required />
        </label>
        <label class="infoProfile-field">
          Email:
          <input type="email" value={email} onChange={handleChangeEmail} required />
        </label>
        <button class="infoProfile-button" type="submit">Submit</button>
      </form>
      </div>
      );

}