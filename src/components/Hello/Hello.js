import './Hello.css'

export function Hello({name, text, onClickHandler}){
    return <p>
      <b>{name}</b>: {text}
      <input 
      type='button' 
      value='Like'
      onClick={onClickHandler}
      ></input>

    </p>
  }
  Hello.defaultProps={
    name: 'Гость',
    text :'Здравствуйте'
  }