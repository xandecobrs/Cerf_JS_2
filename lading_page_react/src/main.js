function Main() {
    return(
        <div className='main'>
          <div className='center'>
             <div className='menu'>
                <div className='logo'>
                   <h3>Xande Treino</h3>
                </div>
                <div className='item-menu'>
                   <a href='#'>Login</a>
                </div>
              </div>

              <div className='form'>
              <h2>Entre em contato!</h2>
                <form>
          
                  <div className='items-form'>
                    <input placeholder='Seu nome' type="text" />
                    <input placeholder='Email' type="text" />
                    <input placeholder='Time' type="text" />
                    <input placeholder='Faz o pix?' type="text" />
                    <input type="submit" />
                  </div>
                </form>
              </div>

          </div>
        </div>
    )
}

export default Main;