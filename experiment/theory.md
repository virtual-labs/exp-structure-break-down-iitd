### Theory

This virtual experiment aims to simulate the application of decomposition of a 3D frame into 2D frames. It also displays the principle of superposition of loads from one member of the frame to another in a sequence of arrangement. The loads are transferred from slabs to beams, beams to columns and columns to footing. The load calculations can be done by simulation disassembling of a 3D structural frame into 4 different 2D frame units.<br>

The experimental calculation involves. <br>
<strong>Step-1:</strong> Calculation of total load intensity of slab involving Dead loads + Floor finish loads. <br>
<strong>Step-2:</strong>Calculation of superimposed dead load of slab transferred to beams. <br>
<strong>Step-3:</strong> Calculation of self-weight of beam. <br>
<strong>Step-4:</strong> Calculation of total imposed load of the frame to footing (superimposed Slab load + self-weight of Beam + self-weight of column). <br>




For imposed load calculation an intensity of 4KN/m2 is considered for the structure as per IS875 Part-II 1987 (Reaffirmed 2008).

The user may carry out the summation of loads of all the 2D frames which will lead to the total imposed load of 3D structure. This can be transferred to the footings. After this, the user may calculate the seismic loads on the building by using the standard base shear formula as per IS 1893 Part-1 (2016). 




<center>
<img src="images/Baseshear.png" height="180px"  width="960px" >

### Fig. 2 formula 2
</center><br>
<strong>Sa/g =</strong> Design acceleration coefficient for different soil types, normalized with peak ground acceleration, corresponding to natural period T of structure (considering soil-structure interaction, if required).
<br>
For the analyis of the given structure the user can calculate the amplitude time period(T) and the the SA/g value using the formula given in the simulation.