export abstract class AuthStrategyAbstraction {

  abstract signIn():Promise<unknown>;
}
