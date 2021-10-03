import React , {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=> {
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtnText("Enable Dark Mode")
        }
    }

    return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#080810'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is WordSwap?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}}>
                            <strong>WordSwap is the text utility site.</strong> where any one can swap the word as they want by the given functions. By using WordSwap you also extract links and emails from lengthy paragraphs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How to use WordSwap?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}}>
                            <strong>Steps to follow:</strong> <br /><br />
                            1. Write your word or paste your word in the textarea.<br />
                            2. After that use function button to change your word as you want. Like: UPPER CASE, lower case, copy text, remmove extra spaces etc.<br />
                            3. If you want to count number of words or Characters, we put that utility in "Text Summary" secton.<br />
                            4. If your paragraph has links or emails and you want to extract it we help you by using links and emails section. In links you find "website-links" and in mail section you find your "mails"<br />
                            5. Enjoy!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact!
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color: props.mode==='dark'?'white':'#080810', backgroundColor: props.mode==='light'?'white' : '#080810'}}>
                            <strong>Mail to : </strong><br />raj.kundalia3636@gmail.com <br /><br />
                            <strong>Github : </strong><br />https://github.com/raj-kundalia
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
            </div> */}
        </div>
    </>
    )
}
