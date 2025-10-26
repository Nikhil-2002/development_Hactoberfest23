import javafx.scene.Group;
import javafx.scene.paint.Color;
import javafx.scene.paint.PhongMaterial;
import javafx.scene.shape.Box;
import javafx.scene.shape.Sphere;
import java.util.function.Function;

public class FunctionGraph3D extends Group {
    
    public FunctionGraph3D() {
        createCoordinateSystem();
    }
    
    public void plotFunction(Function<Double, Double> function, double minX, double maxX, int points) {
        // Clear previous function points
        getChildren().removeIf(node -> node instanceof Sphere);
        
        double step = (maxX - minX) / points;
        
        for (int i = 0; i <= points; i++) {
            double x = minX + i * step;
            double y = function.apply(x);
            
            if (Double.isFinite(y)) {
                Sphere point = new Sphere(0.1);
                point.setMaterial(new PhongMaterial(Color.YELLOW));
                point.setTranslateX(x);
                point.setTranslateY(y);
                point.setTranslateZ(0);
                
                getChildren().add(point);
            }
        }
    }
    
    private void createCoordinateSystem() {
        // X-axis
        Box xAxis = new Box(20, 0.05, 0.05);
        xAxis.setMaterial(new PhongMaterial(Color.RED));
        
        // Y-axis
        Box yAxis = new Box(0.05, 20, 0.05);
        yAxis.setMaterial(new PhongMaterial(Color.GREEN));
        
        // Z-axis
        Box zAxis = new Box(0.05, 0.05, 20);
        zAxis.setMaterial(new PhongMaterial(Color.BLUE));
        
        getChildren().addAll(xAxis, yAxis, zAxis);
    }
}
