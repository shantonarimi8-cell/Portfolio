import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

// ---------- Cake CLASS ----------
class Cake {
    private String name;
    private String flavor;
    private double price;

    public Cake(String name, String flavor, double price) {
        this.name = name;
        this.flavor = flavor;
        this.price = price;
    }

    public String getName() { return name; }
    public String getFlavor() { return flavor; }
    public double getPrice() { return price; }

    @Override
    public String toString() {
        return name + " (" + flavor + ") - ₹" + price;
    }
}

// ---------- CakeStore CLASS ----------
class CakeStore {
    private ArrayList<Cake> cakes = new ArrayList<>();

    public void addCake(Cake cake) {
        cakes.add(cake);
    }

    public ArrayList<Cake> getCakes() {
        return cakes;
    }
}

// ---------- MAIN Swing App ----------
public class BarakahBakes extends JFrame {

    private CakeStore store = new CakeStore();
    private JTextArea displayArea;

    public BarakahBakes() {
        setTitle("BARAKAH BAKES");
        setSize(400, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        JLabel title = new JLabel("Barakah Bakes – Cake Order System");
        add(title);

        JButton addBtn = new JButton("Add Cake");
        JButton viewBtn = new JButton("View Cakes");

        displayArea = new JTextArea(12, 30);
        displayArea.setEditable(false);

        add(addBtn);
        add(viewBtn);
        add(new JScrollPane(displayArea));

        // Add Cake Button Action
        addBtn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                addCakeWindow();
            }
        });

        // View Cakes Button Action
        viewBtn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                showCakes();
            }
        });
    }

    private void addCakeWindow() {
        String name = JOptionPane.showInputDialog("Enter Cake Name:");
        String flavor = JOptionPane.showInputDialog("Enter Cake Flavor:");
        String priceStr = JOptionPane.showInputDialog("Enter Price:");

        if (name == null || flavor == null || priceStr == null) return;

        try {
            double price = Double.parseDouble(priceStr);

            store.addCake(new Cake(name, flavor, price));
            JOptionPane.showMessageDialog(this, "Cake Added Successfully!");

        } catch (Exception ex) {
            JOptionPane.showMessageDialog(this, "Invalid price!");
        }
    }

    private void showCakes() {
        displayArea.setText("");

        if (store.getCakes().isEmpty()) {
            displayArea.setText("No cakes added yet.\n");
            return;
        }

        displayArea.append("Available Cakes:\n\n");
        for (Cake c : store.getCakes()) {
            displayArea.append(c.toString() + "\n");
        }
    }

    public static void main(String[] args) {
        new BarakahBakes().setVisible(true);
    }
}
