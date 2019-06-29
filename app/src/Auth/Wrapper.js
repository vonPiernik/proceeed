export const Wrapper = ({children}) => {
    return(
        <div className="bg-gradient-dark auth-wrap">

            <div className="container">

                <div className="row justify-content-center">
                
                    <div className="col-xl-10 col-lg-12 col-md-9">
                
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage: "url(/img/auth-bg.jpg"}}></div>
                                    <div className="col-lg-6">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}