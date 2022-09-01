import './Event_organiser.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcShare,FcLike,FcGoogle } from "react-icons/fc";

const Events = () => {

     const Eventdata=[
        {
            id:'1',
            person_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
            person_name:'Angelina Joly',
            person_role:'Content creator',

            event_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU',
            event_title:'How To Manage Your Time & Get More Done',
            month:'Aug',
            date:'27',
            dayname:'Sat',
            time:'18.27',
            description:'Using these methodologies will help you determine what tasks you should prioritize and what tasks you should schedule and plan for, delegate, or delete.',
            participants:'87',
            likes:'23',
            shares:'54',
        },
        {
            id:'2',
            person_img:'data:image/png;base64,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',
            person_name:'Angel jane',
            person_role:'Content creator',

            event_img:'https://www.wits.ac.za/media/wits-university/news-and-events/images/promo-boxes-and-feature-boxes/2022-jul-dec/Light-Show_1200x800px.jpg',
            event_title:'Come Celebrate This Once-In-a-Lifetime Milestone',
            month:'Aug',
            date:'29',
            dayname:'Mon',
            time:'18.27',
            description:'Dress up. Turn up. Be part of the #Wits100 Parade, reminiscent of RAG. Gather from 11:30 at the Origins Centre (Yale Road South gate).',
            participants:'125',
            likes:'23',
            shares:'54',
        },
        {
            id:'2',
            person_img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABj1BMVEX///8AJWOKaDcAAACQcEWdgl/l3teRckgAHmC7wM0AImKts8PZ3OMaNmyNbD7z9PaaobXi5OmyhUsAAFEYL3yIZTISJm4AAFVKWoKIkanp6u8AGV6Tm7AAIGHx8vXg4OLKpW7RrnegoqWPkZScnqEbNomjqrzIzNa4jVOqe0C/lFm9vb4AEmYUKXIAAFgAJHiDj787TnpVY4h6hJ8AFFzRxrnFtqUALXDt6eTOx8WdjooxLCnd4O18e3xkY2OAYjWodjS8l2UAHW9ye6UAAG4AIXkAMpWZo8kAI5FvfrZZa60AAImIlMIMLmdmcpMsQnO3pI6aflrYz8SpknbCt7GNgnyysbFOS0prU0ghCQAvIRpFMSiHdW03NzcXFRSFcWZXVlato52Qf3QQExgzNDZLPzlCQ0MVNZVsbGxnVDd7gIeogFDHqnc4JwbgwYpGNRs5Lh9JTG4eI1MyNlhTVWpzeI5NWpCHipQ1RYdmcZwrSJ5AV6SirNBgcrBOYqkAGo5XYpUrPoQAAEZ/VxUkR344YJkqAAANH0lEQVR4nO2di1vayBqHB1AhJCGwghJigwUl3UJBCKJYcSsq6laC93r22FV71qO157Tbrpd6qdvd9g8/M5MLYNXuWbUkeebdLSYT9Jmf3zffZRIVAAKBQCAQCAQCgUAgEAgEAoFAIHwzuP9z3HosXzHe8U1ncZdsXTHeYRcjRq9SODz8Tedxd0RXrrhQTH7TedwhrtVLh4uubzyPuyPqGrtkNO6yjQkBEJ+5iheGoq7H0ZbM5a5YcYnNA49HWjORO6O41mzE6MhFo1qd4lpzeudsqPDCqrOhwuaMER2xUSDFiP9YW1nWzSgWl0ee2c2GIFr66Z9r67hMWx7Z3d61V6pARFdB8blrG0pcef5zEhRtZ0KQ3NjYAmOubTDieg6SW8XLCzkrE914sb4RdblWXa7k1nLHov1sCDZevFhb395+trs5st7RsWyX1rCB4saLjbXtnx8/HlvZ6rDhMgQoBa48QwqflYrLthQI4TZXnrk2o5t2ae0vYeTFyDLosM8G1JdsvXA9/pdtXRSxvvH4l1+27NYZNrK2sf3L5tZ6q6dxd3Dba9uu5yPr9o000bW1lX8nV9btuxCXt6HEkfV1+9WkOsWt1dXhYjJpXxvaGlGMjI5yIqe+jo6OtnpCt0ckikjGYrGdihyL9VQqsdjqxM7OBB6PtHp6t0B8r1Qq7Y4hNjfHxnY30Ss83N2F4yU7xJy99idPvv/uuwcPIb2v7r+8P/76/uv7iN7e3vF4q6d3c7i9V99DgVjhuNuFaP/P69e6wj3rN8LRoydI4QOk0Pffl+3jSy/fLLw2JO5ZfyEycV3hD7vRIiMmAReNHC3oCkvW31Qs1hXGuEg0gne6k25d4Yr1FSZHnmjrECqMNimEAntfMC2e381ZvVzhfV2h1OL53Rys8HtNYaRRIRL40GYKi5ASrnCgwl6scMP6CpOawu8e+DbjK9s/uX7aXomPuTWBDzesvw5VhWpR43vz6w9u95s3mr7e8YcP160fS3G2UI0INb556Xr5a68GquNskA+jqsJXiAfj4+Ovxht5ULJ+TcPFPd3pFKQ81QA8T0O6/4xbvy4Fpbd5QfB0dXU9CtZ5BM89gpB/Z4PeAsQPOqFETWB/JpPp1yRCgd2/2aE/XI3vvxXKXY+gwkz/R5mXj/szWGFZeLs/Zoc9KSYOW/n9oTK0nhJTUYKZTPnRPurxrR9KIUhIKX6gHPT19WkS++BZHCnfa/XkbgUkZS8OQQL7ePTS1wdP90qlXTsswwhIHjkO4lhhLH5Y2akcHsWwwvjeu33kpJz41S9iXkRAS4Ar1dLs/t7R0cHhVD9i6vDg6GjvgE0LOBtGeMBZNivywP8e5YtuoVyGoaZfBwaaclnIv8VOejwBKMvuD/8xzU8FpeG4lg+htp2dHfiq5sM8iqSj71MT9GSrJ/q3YSangsHJ6fhBWlU49f544vj9lKow9VsMAHoyE8xMUq2e6N9HPJwKvp9MxN+myl2ZqcN4LLa6utr3cSrTVU69hSbk0sHg1B+W9VEENTc9nQB7fXtKOAdjqJYP47mwclSCJgT02Ry8bmXmdionsIXS8qGmEOfDPbVx+lDZmW31JG/EdOX0fBqAWJ+qUAlO9StqOtzFe1LUzInFFYKdubOn0FglKOoI1qOwrchkckd98VIfvlz5sDNj5YwPkSpzs6cwrZdy6VT5kUo5lX4Xx7o+/EidnrV6ijflw+zAzBzar8nmu1AfjF4Eh9pUnJ2cnZ+2eoI3pzIwMEOhPrGW6lKBAnFfOPp0YPp362/UQB303NNRJPFtt+CB/+XfqQLFyuz073Srp3cbnJ2ez/0OJSZRgSoInb+V8DYwtwN9dKDVk7sdZs/PPiCJ0dKRtzu/H8drUNyZpU7PWz212+LD+fnZUwltLcb3S6u4VRqFy3PABlFG58OPJ3NPYeaHIVXdmaErM9PnJ62d1O0yezpwNnOux01udubHsxPbuKjK9NO5hurlpH9nxuLF2pdIM5U5/VZaZLoyY/lS5ku4gYnJQ7/ESImPkx/nbJDov8B/CNv598d/HH+cCmYOJ1o9nTsg8n4yM+WfDtKwvUhlrH/v9zKkCWi8YHAyOGHhjZmvwQWYgGU3RwkEAoFAIBAucHVdIzIMY87GQ+rJhnNZ3nheNGAcMT1ZeAGV2olcWD/qZrNhSC4XxmS71bfK6VouV+vM10z53KmYr7L1Mz5XP5bz2rYol3fI+EDJJWiaoiivg6comvaH0/hzOmXVuHy3OXsPuSrUTxz5uieGDeUOh3q3UJfvcWhthgL/JfKK8RmBu5vmDZC8Xql+7KhvZ3f79aOqNqoLMBSiDw2fTpvThkCoGlKUajWsH1PdhkWqjuZtfEMhJCB4Tbn6GlEMVVwn5RX0kCjXjHew1yiMCFX5jid4Y2iHoC2+RA1kHbpB7xmWvVYhqLEeszf/ouFnNRokHFn1mOmsh41rFUp5Vui56znekKyDxx8DnRyUK6jKehpyyLUKAZ1nHVlzRlEdv0NVw6OwH3aoBqk12OV6hYCpVtm8qRcj41HDSx45K+3FciMNTvo1hag4YKsXx0yFmg2kPDrmBA8u0KoN17+qEDA1B+vJAdMiO5B/KupqVPCqDDcGj68rhN8Sga2ypn0ERfKiwk3zS1h1oszYWJ78FYUgwLLV2pfDJsED8wWtpQlw754EKEfj5b+kEHAs6zXt027IM7O6Chl2EprHavw1hUByVJXLxs0A7c2KnXpXId3zguY+6Lq6tLEtFqqmDTawSZTr3/5qVa42Xa46mr2vSWFDQ+Gpmre4ybL5eofAV71NTgq8Dn/TudBo04RxzAl50wZTo6zBMB5Pc6MnNNtG9DTa1F/V/ZTvNnHSZ9JN+Y9tvph3hBvPJcHREFF68iyFNAZkczeK+cadsp4mkyUUWVZkvxFR/OicN/yW84fTnal76awtHna7Ci5i3gVIIBAIhFuACaD6hWFE7YcmmUAAcAzD4QN8QQxEAoFABEQCjF7qUBR8bwB9pgQvMXCcCYj4uZuW6bgaEZdaNGwKArjcFlNwqqgMl/5EJUpCQTdkaJqH+TzMU1Vcl4UZikddsgS4XKInRfsVIKGWmfOacsuNxTaUAYjcwz0wevGjyltBlU1O1EocpJsCzD14KMnqLQxvBLVOohdfpGBhJ5tSYF1hwC+j8tNQKAnQKqjh69EqNKgwgipWUdvi8OJKL+JVr2Yl0aQ7inWFPAhDn0QqsUJQlUACeao/LMtIJFSYwF5K/4k/NCuMsGZt8OsK4b+ajG8SqgrhGsQ9BfJSJEnO8VpnLHUi5c0KVa82I1k0WalHVQhYP7KEqpDrlnAfqLca0Iay5ogU+j44mhXyzW2yeehBk1YCmkLAIjP5ta1T9e4wXocMVghYqDmh2hx4VIUe7QuZViFQFFpBvZ0f+ytXQ/FFvdMiYc1c2MHzvAzEmgKDJysH/AqNQizT2YN6Rn+n2tlz4Zw5QylAifrrb2nq/0TTSiEQCAQCgUAgEAgEwm0xqB8MF+YLi02XuMH5+UGr/8WggnNBPRhu/zS/OOgODdavzX9aGhxc+jTfmpndDgWnr60dH3WEQvjvrC2FDEHuUAG/J7TQkrndBoWlQnubqpBz+grqoFO3YruvXTtwLrVidrcBB03nVBUu+ULagwnzPif+OOh0aoty0Rmy8J/R0xQOh9qWjBHVmu62kP6mkObJlkRTWPDpTgr1uH31C5iltpB1A6omxN3mNPLEQpuzAzmrzwg5876QdeOpqpALuZ2GlZbakD0X2nxG3iigoMpRvKLIfjPeEb0WVWGH0x0ynoCa96E1CTUbVh1GNwvR7zgrp9LpIYs9CaUqHPS5jbAC12TbAgw9bmc9gNLVrqGuVJanGIaR+GNz/mTlFagKCz630xiCJz4w7KwrlD53DQmfE/Vtfkt56uUKnchvNYWckhoqZ039EOK1GAp9xhA+MRRS0D9Z6+prWIeNNmxz617K5cpDZT8sa3zDqASCShkR/W8hVIWLFyJNO8ofsFSToAGzEcAthULorrESyQWkakRir/mCpuPSbIFyfcjXAeTUUArd5l0MQasCpuczUBj05Eb4mi9oOrSa5kLGh7l+HoyyQ0NDOGwO4gzJ8IHEZ0CLgLJgtgDtbfXst6BWoTwModrTJLBqHcR38iVeCstSVraSRE3hYGPlDRM+YGAOHNIfxIeVt+rDImq4LPb7o/QWot4gdXxaGMYrsP68k8+HnJQGInRRmjHtj6hfjq6w4NQbpMIi8MMKNMzgelR9D7oW8CfCIBvhhiLcZyuZ0WgD20NaC8z5u8q4huHatRy5pO7X+BMyegonV/9NC5ZgHuZ61SKrhWHkirl0KqWoNcx8SDWvutkWoEQF5Dj1+SGrUIAhxOdzhpbmobjIxCP016uGFNrwwcWFT+1LITfuorjPCtWT8FPhYyprreaikUjg4i/aG+7osO7+BYFAIBAIBAKBQCAQCAQCgUAgEAgEAoFgV/4HL9ACBOO1ZggAAAAASUVORK5CYII=',
            person_name:'Angel jane',
            person_role:'Content creator',

            event_img:'https://scontent.cdninstagram.com/v/t51.29350-15/300884922_185876260555464_8991694973453613625_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=1sSjciivxRMAX8hZUQ4&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_jHeW-qktLCg7hIA5PyPTMSPIQJpsyX_IY1XGq6x4sIg&oe=6312468B',
            event_title:'GIVE AWAYS',
            month:'Aug',
            date:'25',
            dayname:'Tues',
            time:'14.30',
            description:'The #Wits100 Visible Resonance Light Show on 2 September at 7pm on the Great Hall façade will reflect, create, improvise, and imagine Wits’ stories.',
            participants:'95',
            likes:'23',
            shares:'54',
        }
     ];

    // get the date in the correct format
    const date = new Date()
    const month = date.toLocaleString('default', {month: 'short'}) // month name
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var dayName = days[date.getDay()];
    const time = date.getHours() + "." + date.getMinutes()

    return (
        <Container style={{ width: '100%',height:'100%' }}>
        <Row>
        {Eventdata.map(data=>(

            <div className="cardp">
              <img className="card_img" src={ data.event_img }/>
                <div className="card_body">
                     <h2 className="card_title">{ data.event_title }</h2>
                    <div className="card_event_date">
                    <p>{ data.month }</p>
                    <h3>{ data.date }</h3>
                   </div>
                   <p className="card_event_time">{ data.dayName } { data.time } Zoom Meeting</p>
                   <p className="card_description">{ data.description }</p>
               </div>
              <div className="card_dots_menu">
                <span className="card_dots"></span>
                <span className="card_dots"></span>
                <span className="card_dots"></span>
              </div>
             <div className="card_footer">
                <div className="card_footer_participants">
                    <h3 className="card_participants_num">{ data.participants }</h3>
                    <h3 className="card_participants">Participants</h3>
                </div>
             </div>
            
            <div className="card_icons">
                <div className="card_fireicon">
                    <FcLike />
                    <p>{ data.likes }</p>
                </div>

                <div className="event_organiser">
               <img src={ data.person_img}/>
               <h3 className="personname">{ data.person_name }</h3>
               <p className="event_organiser_role">{ data.person_role } at</p>
               <FcGoogle  className="company_logo"/>
               </div>

                <div className="card_share_icon">
                    <FcShare />
                    <p>{ data.shares}</p>
                </div>
            </div>
        </div>

        ))}

</Row>

      
</Container>
        
    );
}

export default Events;