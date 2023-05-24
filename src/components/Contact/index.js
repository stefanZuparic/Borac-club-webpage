import { useRef } from 'react'
import './index.scss'
import emails from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emails
      .sendForm(
        'service_ha01cfj',
        'template_iwjgbbf',
        refForm.current,
        '67fF5WUC-pf2mkyqU'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, please try again')
        }
      )
  }
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>CONTACT US</h1>
        <p>
          Neki teks o tome kako smo srecni da mozemo da pruzimo mogucnost da u
          dobrim uslovima treniraju smmisliti
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li>
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="SEND" />
            </li>
          </form>
        </div>
      </div>

      <div className="map-wrap">
        <MapContainer
          center={[45.24692106573919, 19.845554971162095]}
          zoom={17}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[45.24692106573919, 19.845554971162095]}>
            <Popup>Place where champions are made :)</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact
