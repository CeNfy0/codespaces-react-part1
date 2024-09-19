import './Hello.css';

export default function Hello({firstname,lastname="Jaidee",age=25}){

    return (<><h1>Hello World {firstname} {lastname} {age} </h1></>);
    
}