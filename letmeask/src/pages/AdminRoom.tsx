import { useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import logoImg from '../assets/images/logo.svg';

import { RoomCode } from '../components/RoomCode';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss'

type RoomParamsType = {
    id: string,
}


export function AdminRoom() {
    const params = useParams<RoomParamsType>();
    const roomId = params.id;
    const { title, questions } = useRoom(roomId);

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar sala</Button>
                    </div>

                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >
                                <div></div>
                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>
    );
};