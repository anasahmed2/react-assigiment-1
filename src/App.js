import logo from './logo.svg';
import './App.css';
import { name, obj, data, list, complex, question, point1, point2, point3, users } from './components/varibles'


function App() {


  return (
    <>
      <div className='heading'>
        <img src={logo} alt='react-logo' /> <h1>React Assigiment</h1>
      </div>
      <div className='center'><p className='name'>By Anas Ahmed </p></div>
      <div className='question'>
        <h1 className='center'>Question # 1</h1>
        <div><b>Name</b> : {name}</div>
        <div><b>Object</b> : {obj.name}</div>
        <div className='boxs'>
          <ul>
            {data.map((v, i) =>
              <li key={i}>{v}</li>)}
          </ul>
        </div>

        <div className='boxs'>
          <ul>
            {list.map((v, i) =>
              <li key={i}>{v.name}</li>)}
          </ul>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className='th' >S.No</th>
              <th className='th' >Campany</th>
              <th className='th' >Job</th>
            </tr>
          </thead>
          <tbody>
            {complex.map((v, i) =>
              <tr key={i}>
                <td className='td'>{i}</td>
                <td className='td'>{v.company}</td>
                <td className='td'>{v.jobs[1 - i]} , {v.jobs[i]}</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>

      <div className='question'>
        <h1 className='center'>Question # 2</h1>
        <h3> {question}</h3>
        <div className='color table'>  <p>{point1}</p><p>{point2}</p><p>{point3}</p>
        </div>
      </div>
      <div className='question'>
        <h1 className='center'>Question # 3</h1>
        <div className='main-congtainer'>

          {users.map((v, i) =>

            <div className="cookieCard" key={i}>
              <div className='idNum'>{v.id}</div>
              <div>
                <p className="cookieHeading">{v.name}</p>
                <p className="cookieEmail">{v.email}</p>
              </div>
              <div>
                <p className="title-heading">Title .</p>
                <p className="cookieDescription">{v.title}</p>
              </div>
              <div>
                <p className="title-heading">Body.</p>
                <p className="cookieDescription">{v.body}</p>
              </div>
            </div>
          )}

        </div>
          
      </div>
    </>
  );
}

export default App;



