abstract class Failure implements Error{
    name: string;
    message: string;
    msg : String;

    toString(){
        return this.message
    }
}

export default Failure