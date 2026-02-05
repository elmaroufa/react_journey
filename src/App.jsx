import * as React from 'react';
import './App.css'
const title = 'React';
const TitleAbbo = () => {
    return <p>
      salu le dev
    </p>;
}
const Item = ({item}) => {

   return (
     <li>{item.title}
             <span>
              <a href={item.url}>{item.title}</a>
             </span>
             <span>{item.author}</span>
             <span>{item.num_comments}</span>
             <span>{item.points}</span>
          </li>
   )
}
const Message = (props) => {
  const {text, bgColor} = props;
   return <div>
     {text} and {bgColor}
   </div>
}
const List = ({ list }) => {
  return(
    <ul>
        {list.map(function (item){
          return (
         <Item key={item.objectID} item={item} />
        );
        })}
      </ul>
  );
}
const InputWitLable = ({id, label, value, type = 'text', onInputChange}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
);
const useStorageState = (key,initialState) => {

  const [value, setValue] = React.useState(
  localStorage.getItem('search') || initialState
);

React.useEffect(()=>{
  localStorage.setItem(key, value);
}, [value, key]);

return [value, setValue]

}

const App = () => {
const stories = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

const [searchTerm, setSearchTerm] = useStorageState('search','React')
const handleSearch = (event) => {
  setSearchTerm(event.target.value);
};

const searchdStories = stories.filter((story)=> {
    return story.title.toLowerCase().includes(searchTerm);
});

  return (
    <div>
      <h1> Hello {title} </h1>
      <hr/>
      <InputWitLable id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch} />
      <List list={searchdStories}/>
      <Message text="Saly Abbo" bgColor="red"/>
    </div>

  )
}

export default App
