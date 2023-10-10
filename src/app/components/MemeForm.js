import React, { useState } from 'react';
import styles from './MemeForm.module.css';
import { useDispatch } from 'react-redux';
import { addMeme } from '../../redux/features/memeListSlice';

export default function MemeForm() {
  const dispatch = useDispatch();

  const initialState = {
    top: '',
    bottom: '',
    imageUrl: '',
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, imageUrl: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
    dispatch(addMeme(formData));
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      {['top', 'bottom', 'imageUrl'].map((i) => {
        const isImage = i === 'imageUrl';
        return (
          <label
            htmlFor={i}
            key={i}
          >
            {isImage ? (
              <input
                id={i}
                type='file'
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                accept='image/*'
                required
              />
            ) : (
              <input
                name={i}
                type={'text'}
                value={formData[i]}
                onChange={handleChange}
                placeholder={`Enter ${i} text`}
                required
              />
            )}

            {isImage ? (
              <div>
                <span className={styles.button}>Upload Image</span>
                {formData.imageUrl ? (
                  <span>
                    <i
                      className='fa-solid fa-check fa-lg'
                      style={{ color: '#77bc49' }}
                    />
                  </span>
                ) : null}
              </div>
            ) : null}
          </label>
        );
      })}
      <button className={styles.button}>Submit</button>
    </form>
  );
}
