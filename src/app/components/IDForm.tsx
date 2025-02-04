import styles from './form.module.css'

export default function IDForm() {
  return (
    <div className={styles.form}>
        <section>
             <h2>Hello, Student</h2>
                <p>Fill in the form  to generate your ID card</p>
        </section>
        <section>
            <h1>generate your id card</h1>
            <form>
               <ul>
                <li>
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
                </li>
                <li>
                    <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
                </li>
                <li>
                    <input type="file" name="photo" id="photo" placeholder="insert photo" accept='image/*'/>
                </li>   
                <li>
                    <select>
                        <option value="wfs">FullStack (Web Development)</option>
                        <option value="mfs">FullStack (Machine Learning)</option>
                        <option value="pd">Product Design</option>
                        <option value="fe">Frontend</option>
                        <option value="be">Backend</option>
                        <option value="ds">Data Science</option>
                    </select>

                </li>
                <li>
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                </li>
                <li>
                    <button type="submit">Generate</button>
                </li>
               </ul>
            </form>
        </section>
    </div>
  )
}