import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import data from '../../sample data/data.json';

const options = [
    { value: 'option1', label: 'option1'},
    { value: 'option2', label: 'option2'},
    { value: 'option3', label: 'option3'},
];

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #e2e7ee',
      borderRadius: '4px',
      'width': '50%',
      'fontSize': '13px',
      margin: '5px 0 3px 0 '
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
    valueContainer: (provided) => ({
        ...provided,
        justifyContent: 'center',
        padding: '0',
      }),
  };
  
const AddSelect = () => {
    const [dropdownValue, setDropdownValue] = useState(null)
    return (
        <Select
            className='dropdown'
            options={options}
            styles={customStyles}
            placeholder='Default'
            value={dropdownValue}
            onChange={(item)=>{
                setDropdownValue(item);
            }}
        />
    )
}  

const ContentTable = () => {
    const transformDataToTable = (inputData) => {
        const outputDataStructure = inputData.map((item) => {
            const {id,name,status,logo,width:logoWidth,height:logoHeight} = item
            console.log(logo)
            return (
                <tr key={id}>
                    <td>
                        <div className='row-name-cell'>
                            <div className='row-name-img'>
                                <img src={logo} alt="" width={logoWidth} height={logoHeight}/>
                            </div>
                            <div className='row-name-text'>
                                {name}
                            </div>
                        </div>
                    </td>
                    <td className='row-dropdown-cell'>
                        <AddSelect/>
                    </td>
                    <td>{Math.round((Math.random()*100000))}</td>
                    <td>{Math.round((Math.random()*1000))}</td>
                    <td>{Math.round((Math.random()*1000))/10} GB</td>
                    <td className="row-status-cell">
                        <span className='row-status-badge'>
                            {status}
                        </span>
                    </td>
                </tr>
            )
        })
        return outputDataStructure
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">CUSTOMER</th>
                        <th scope="col"></th>
                        <th scope="col">COM ID</th>
                        <th scope="col">LEG ID</th>
                        <th scope="col">SIZE</th>
                        <th scope="col">STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {transformDataToTable(data)}
                </tbody>
            </table>
        </div>
    );
};

export default ContentTable;
