import React from 'react';
import Select from 'react-select';
import data from '../../sample data/data.json';

const options = [
    { value: 'option2', label: 'option1'},
    { value: 'option2', label: 'option2'},
    { value: 'option3', label: 'option3'},
];

const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #e2e7ee',
      borderRadius: '4px',
      boxShadow: state.isFocused ? '0 0 0 1px #0366d6' : null,
      'width': '50%',
      justifyContent: 'center',
      allignItems: 'center',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      display: 'none',
    }),
  };

const ContentTable = () => {

    const transformDataToTable = (inputData) => {

        const outputDataStructure = inputData.map((item,index) => {
            const {id,name,status} = item
            console.log(index);
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td className='row-dashboard-cell'>
                        <Select
                            className='dropdown'
                            options={options}
                            styles={customStyles}
                            placeholder='Default'
                        />
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
