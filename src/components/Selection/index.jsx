
import Select from 'react-select';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    marginTop:'0px',
    boxShadow: "none",
    border:'1px solid #E0E0E0'
  }),

    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#fff' : '#0F0F0F',
      backgroundColor: state.isSelected ? '#AA68C2' : '#fff',
      cursor:'pointer',
      padding:'10px',
      "&:hover": {
        backgroundColor: state.isSelected ? '#AA68C2' : '#EACEF4'
      }
    }),
    control: (provided) => ({
      ...provided,
      border:'1px solid #E0E0E0',
      padding:'4px',
      fontSize:'17px',
      borderRadius:'0px',
      cursor:'pointer',
      boxShadow: "none",
      "&:hover": {
        border:'1px solid #E0E0E0',
      }
    })
  }
  


const Selection = ({options, handler, defaultValue={}}) => { 


    return (
        <Select 
          onChange={(e)=> {handler(e.label)}} 
          defaultValue={defaultValue ? defaultValue : {
            value:options[0].value,
            label:options[0].title
          }} 

          state = {defaultValue}
          styles = { customStyles } 
          options={options.map((option) => ({ value: option.value, label: option.title }))}>
        </Select>
    )
}

export default Selection;