import { useState } from 'react'
import { useSelector } from 'react-redux'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('Magic Copybook Kit')
  const [description, setDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label className='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label className='name'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='Eyebrow Stamp & Stencil Kit'>
                Eyebrow Stamp & Stencil Kit
              </option>
              <option value='Press and Go Lashes'>Press and Go Lashes</option>
              <option value='Polygel Nail Kit'>Polygel Nail Kit</option>
              <option value='4 Pairs Magnetic Lashes'>
                4 Pairs Magnetic Lashes
              </option>
              <option value='Magic Copybook Kit'>Magic Copybook Kit</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket
