class SubSystemClassA:
    @staticmethod
    def method():
        return "Elaboracion, "
class SubSystemClassB:
    @staticmethod
    def method():
        return "Facturacion y comprobante, "
class SubSystemClassC:
    @staticmethod
    def method():
        return "Envio "
 
class Fachada:
    def __init__(self):
        self.sub_system_class_a = SubSystemClassA()
        self.sub_system_class_b = SubSystemClassB()
        self.sub_system_class_c = SubSystemClassC()
 
    def Crear(self):
        result = self.sub_system_class_a.method()
        result += self.sub_system_class_b.method()
        result += self.sub_system_class_c.method()
        return result
 

Pedido = input("Que quiere Pedir? ")
FACADE = Fachada()
RESULT = FACADE.Crear()
print("Orden", Pedido," se realizo: ", RESULT)