import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books: []
        }
       
    }
    componentDidMount() {
        fetch('https://5e3317b0e0161c00140abf6b.mockapi.io/api/Book')
        .then(res => res.json())
        .then((data) => {
          this.setState({ books: data })
        })
      }
    render(){
       
        return(
            <React.Fragment>
                <div class="topnav">
                    <a class="active" href="/">Ana Sayfa</a>
                    <a href="create">Kitap Ekle</a>
                    <div class="search-container">
                        <form>
                            <input type="text" placeholder="Aramak istediğiniz kitabı yazın.." name="search"/>
                            <button type="submit" class="search"><i>Ara</i></button>
                        </form>
                    </div>
                 </div>

                 <div class="container">
                     <div class="table-wrapper">
                         <div class="table-title">
                             <div class="row">
                                 <div class="col-sm-6">
                                     <h2> <b>Kitap Listesi</b></h2>
                                 </div>
                             </div>
                         </div>
                          <table class="table table-striped table-hover">
                              <thead>
                                  <tr>
                                      <th></th>
                                      <th>Kitap Adı</th>
                                      <th>Yayınevi Adı</th>
                                      <th>Yazar Adı</th>
                                      <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.books.map(book => (
                                    <tr>
                                        <td></td>
                                        <td>{book.name}</td>
                                        <td>{book.publisher}</td>
                                        <td>{book.author}</td>
                                        <td><button class = "button"><i>Detay</i></button></td>

                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}