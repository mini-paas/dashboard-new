package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.Data["content"] = "./app/app.html"
	c.TplName = "starter.html"
}

func (c *MainController) Index() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.Data["content"] = "./app/app.html"
	c.TplName = "app/app.html"
}

func (c *MainController) Index1() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.Data["content"] = "./app/app1.html"
	c.TplName = "app/app1.html"
}
