export interface IPage{
  title:string,
  id:string
}

export interface IPageMutation{
  title:string,
  content:string,

}

export interface IPageEdit extends IPageMutation{
  page:string
}

