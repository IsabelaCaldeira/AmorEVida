import React from 'react'
import styles from './TextField.module.scss';

const TextField = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={styles.campotexto}>
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        >
        </input>
    </div>
  )
}

export default TextField