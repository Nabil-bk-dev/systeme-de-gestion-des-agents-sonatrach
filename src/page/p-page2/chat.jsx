import { PrettyChatWindow } from 'react-chat-engine-pretty';

const Chat = ({USER}) => {
  return (
    <>
      <div style={{ height: '85vh' }}>
        <PrettyChatWindow
          projectId="76cd9864-8ada-4817-835c-66156ab4a30d
 "
          username={USER.IdE}
          secret={USER.IdE}
          style={{ height: '85vh' }}
        />
      </div>
    </>
  );
};

export default Chat;
