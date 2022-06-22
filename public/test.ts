
interface 极客时间课程 {
  课程名称: string,
  价格: number[],
  受众: string,
  讲师头像?:string | boolean,
  获取口令(): string
}

type 课程属性列表 = keyof 极客时间课程

let vueCourse: 极客时间课程 = {
  课程名称: 'Vue全家桶',
  价格: [69, 129],
  受众: '男女都可以',
  讲师头像: false,
  获取口令() {
    return 'joy123'
  }
}

function getProperty<某种类型,  某种属性 extends keyof 某种类型>(o: 某种类型, name: 某种属性): 某种类型[某种属性] {
  return o[name];
}
function getProperty1<T, k extends keyof T>(o: T, name: k): T[k] {
  return o[name];
}