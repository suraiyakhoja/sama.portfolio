import sama from '../../assets/sama.png'
import softwaredev from '../../assets/softwaredev.png'
import leetcode from '../../assets/leetcode.png'
import todo from '../../assets/todo.png'
import study from '../../assets/study.png'
import flower from '../../assets/flower.png'
import water from '../../assets/water.png'



export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen relative w-full m-0 p-0"
        >
            <img 
                src={sama} 
                alt="sama"
                className="absolute"
                style={{
                    top:'100px',
                    left:'140px',
                    transform:'rotate(3deg)',
                    width: '250px',
                }} 
            />

            <img 
                src={softwaredev} 
                alt="softwaredev"
                className="absolute"
                style={{
                    top:'200px',
                    left:'300px',
                    transform:'rotate(3deg)',
                    width: '200px',
                }} 
            />

            <img 
                src={leetcode} 
                alt="leetcode"
                className="absolute"
                style={{
                    top:'400px',
                    left:'450px',
                    transform:'rotate(4deg)',
                    width: '250px',
                }} 
            />

            <img 
                src={todo} 
                alt="todo"
                className="absolute"
                style={{
                    top:'450px',
                    left:'220px',
                    transform:'rotate(0deg)',
                    width: '220px',
                }} 
            />

            <img 
                src={study} 
                alt="study"
                className="absolute"
                style={{
                    top:'120px',
                    left:'630px',
                    transform:'rotate(-1deg)',
                    width: '180px',
                }} 
            />

            <img 
                src={flower} 
                alt="flower"
                className="absolute"
                style={{
                    top:'90px',
                    left:'880px',
                    transform:'rotate(2deg)',
                    width: '460px',
                    height: '650px'
                }} 
            />

            <img 
                src={water} 
                alt="water"
                className="absolute"
                style={{
                    top:'480px',
                    left:'1150px',
                    transform:'rotate(0deg)',
                    width: '200px',
                }} 
            />
        </section>
    )
}