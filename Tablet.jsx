import { useAuth } from "./AuthContext";

/** Button that attempts to use the token in context when clicked */
export default function Tablet() {
  // TODO: call authenticate when form is submitted - done

  const { authenticate } = useAuth();

  async function handleSubmit(event){
    event.preventDefault();

    try {
      await authenticate();
    } catch (err) {
      console.error("Error authenticating:", err);
    }

  }
    



  return (
    <section>
      <p>
        The sound of your name thuds against the gate as the two badgers furrow
        their brows. The badger on the right beckons you to approach.
      </p>
      <p>"Only those who are pure of heart may pass."</p>
      <p>
        "Place your hand upon this stone tablet, and thus will your true self be
        revealed."
      </p>
      <p>
        It holds out a rectangular stone tablet carved with an intricate design.
      </p>
      <form onSubmit={handleSubmit}> 
        <button>Place your palm upon the tablet.</button>
      </form>
    </section>
  );
}
